using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.Windows.Media.Animation;
using Microsoft.Win32;
using System.IO;

namespace FinalProject
{
    /// <summary>
    /// Interaction logic for Sent.xaml
    /// </summary>
    public partial class Sent : Window
    {

        // Sinisen renkaan sijainti
        static double canvasWidth = 200;
        static double canvasCenter = canvasWidth / 2;

        Thickness blueCThick = new Thickness(canvasCenter - 160, 100, 0, 0);
        Thickness blueCThickEnd = new Thickness(-100, -250, 0, 0);


        public Sent(string fName, string lName, string pNum, string dDay, string lLoc, string eDay)
        {
            InitializeComponent();
            suljeS();
            name.Text = $"{fName} {lName}"; 
            num.Text = pNum;
            time.Text = $"Alkaa: {dDay} Loppuu: {eDay}";
            place.Text = lLoc;
            

        }
        private void Save_Click(object sender, RoutedEventArgs e)
        {
            string saveParking = $"Luvan haltija: {name.Text}\x0APuhelinnumero:{num.Text}\x0ALuvan voimassa olo aika: {time.Text} \x0APaikkaan: {place.Text}";
            SaveFileDialog saveFileDialog = new SaveFileDialog();
            saveFileDialog.Filter = "Text documents(.txt)|*.txt";
            if (saveFileDialog.ShowDialog() == true)
                File.WriteAllText(saveFileDialog.FileName, saveParking);

        }
       
        //Piirtää sininsen ympyrän
        private void suljeS()
       {
         
           MainCanvas.Children.Clear();
           DrawBlueCircle(blueCThick);
        }

        //Napin painalluksesta kuljettaa vasemmanlaidan puoliympyrän ylös, ennen kuin ikkuna sulkeutuu
        private void Press_Click(object sender, RoutedEventArgs e)
        {
            Animate(blueCThick, blueCThickEnd, "blueCircle");

        }

        //Animaatio, joka liikuttaa rengasta
        private void Animate(Thickness start, Thickness end, string name)
        {
            ThicknessAnimation animate = new ThicknessAnimation();
            animate.Duration = TimeSpan.FromSeconds(1.5);
            animate.FillBehavior = FillBehavior.HoldEnd;

            animate.From = start;
            animate.To = end;

            Storyboard.SetTargetName(animate, name);
            Storyboard.SetTargetProperty(
                animate, new PropertyPath(Ellipse.MarginProperty));

            Storyboard animationBoard = new Storyboard();
            animationBoard.Children.Add(animate);
            if (FindName("blueCircle") != null)
            {
                animationBoard.Completed += new EventHandler(animationBoard_Completed);
                animationBoard.Begin(this);
            }
        }

        //Sulkee ikkunen kun animaatio on valmis
        private void animationBoard_Completed(object sender, EventArgs e)
        {
            Close();
        }

        //Sininen rengas
        private void DrawBlueCircle(Thickness thickness)
        {
            var blueCircle = new Ellipse();
            blueCircle.Name = "blueCircle";
            CheckAndUnregister(blueCircle.Name);
            RegisterName(blueCircle.Name, blueCircle);
            blueCircle.Width = 100;
            blueCircle.Height = 100;
            blueCircle.Stroke = Brushes.Blue;
            blueCircle.StrokeThickness = 15;
            blueCircle.Margin = thickness;
            MainCanvas.Children.Add(blueCircle);
        }

        //Tyhentää objektin register nimen
        private void CheckAndUnregister(string name)
        {
            if (FindName(name) != null)
            {
                UnregisterName(name);
            }
        }
    }
}