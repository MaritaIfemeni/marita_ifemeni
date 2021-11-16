class Nelikulmio : public Kuvio
{
    public:
        Nelikulmio(char tekstuuri, int korkeus, int leveys);
        void Piirra();
    private:
        int korkeus_;
        int leveys_;
};

Nelikulmio::Nelikulmio(char tekstuuri, int korkeus, int leveys) : Kuvio(tekstuuri), korkeus_(korkeus), leveys_(leveys)
{

}

void Nelikulmio::Piirra();
{
  int i, j;
  for(i = 0; i < korkeus_; i++)
  {
    for(j = 0; j < leveys_; j++)
    {
      if(j == leveys_ - 1){
        cout << PalautaTekstuuri() << endl;
      }
      else{
        cout << PalautaTekstuuri();
      }
    }
  }
}

}