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

namespace FinalProject
{
    /// <summary>
    /// Interaction logic for Laskin.xaml
    /// </summary>
    public partial class Laskin : Window
    {
        public Laskin()
        {
            InitializeComponent();
        }
        private void Nro_Click(object sender, RoutedEventArgs e)
        {
            Button nro = (Button)sender;
            result.Text += nro.Content.ToString();
        }

        private void Results()
        {
            if (result.Text.Contains("+"))
            {
                string[] val = result.Text.Split('+');
                result.Text = (Convert.ToInt32(val[0]) + Convert.ToInt32(val[1])).ToString();
            }
            else if (result.Text.Contains("-"))
            {
                string[] val = result.Text.Split('-');
                result.Text = (Convert.ToInt32(val[0]) - Convert.ToInt32(val[1])).ToString();
            }

        }
        private void Equals_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                Results();
            }
            catch
            {
                result.Text = "Pystyn laskemaan vain kahdella luvulla";
            }
        }

        private void Empty_Click(object sender, RoutedEventArgs e)
        {
            result.Text = "";
        }
        private void Sulje_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
