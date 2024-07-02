void setup()
{
  pinMode(2, OUTPUT);
}

void loop()
{
  Serial.write(analogRead(0));
  if (200 > analogRead(0))
  {
    digitalWrite(2, HIGH);
  }
  else
  {
    digitalWrite(2, LOW);
  }
  delay(100);
}
