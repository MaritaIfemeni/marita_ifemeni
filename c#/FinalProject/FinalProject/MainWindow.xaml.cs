using System.Windows;


namespace FinalProject
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        public MainWindow()
        {
            InitializeComponent();
            Title = "Parking Made Easy";
        }

        private void MenuItem_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void MenuItem_Click_1(object sender, RoutedEventArgs e)
        {
            firstName.Text = "";
            lastName.Text = "";
            phoneNum.Text = "";
            Kauniainen.IsChecked = false;
            Vihti.IsChecked = false;
            Kalasatama.IsChecked = false;
            Vuosaari.IsChecked = false;
            startDate.SelectedDate = null;
            endDate.SelectedDate = null;
            sentWarning.Text = "";

        }

        
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (firstName.Text == "" || lastName.Text == "" || phoneNum.Text == "") 

            {
                sentWarning.Text = "Täytä tarvittavat tiedot!";
            }

            else
            {
                string fName = firstName.Text;
                string lName = lastName.Text;
                string pNum = phoneNum.Text;
                string sDay = startDate.SelectedDate.ToString();
                string eDay = endDate.SelectedDate.ToString();
                string lLoc = "Valitse paikka!";
                if (Kauniainen.IsChecked == true)
                {
                    lLoc = Kauniainen.Name;
                }
                else if (Kalasatama.IsChecked == true)
                {
                    lLoc = Kalasatama.Name;
                }
                else if (Vihti.IsChecked == true)
                {
                    lLoc = Vihti.Name;
                }
                else if (Vuosaari.IsChecked == true)
                {
                    lLoc = Vuosaari.Name;
                }
                else
                {
                    sentWarning.Text = "Valitse paikka!";
                }

                Sent sent = new Sent(fName, lName, pNum, sDay, lLoc, eDay);
                sent.Show();
            }
        }
        private void MenuItem_Click_2(object sender, RoutedEventArgs e)
        {
            Laskin laskin = new Laskin();
            laskin.Show();
        }

        private void MenuItem_Click_3(object sender, RoutedEventArgs e)
        {
            System.Diagnostics.Process.Start("http://www.googlemaps.com");
        }

        private void kauniainen_Checked(object sender, RoutedEventArgs e)
        {
            Kalasatama.IsChecked = false;
            Vuosaari.IsChecked = false;
            Vihti.IsChecked = false;
        }
        private void kalasatama_Checked(object sender, RoutedEventArgs e)
        {
            Kauniainen.IsChecked = false;
            Vuosaari.IsChecked = false;
            Vihti.IsChecked = false;
        }
        private void vuosaari_Checked(object sender, RoutedEventArgs e)
        {
            Kalasatama.IsChecked = false;
            Kauniainen.IsChecked = false;
            Vihti.IsChecked = false;
        }
        private void vihti_Checked(object sender, RoutedEventArgs e)
        {
            Kalasatama.IsChecked = false;
            Vuosaari.IsChecked = false;
            Kauniainen.IsChecked = false;
        }
    }
}
