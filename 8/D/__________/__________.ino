void setup()
{
  pinMode(6, INPUT);
}

void loop()
{
  if (digitalRead(6))
  {
    tone(8, 500, 500);
  }
}
