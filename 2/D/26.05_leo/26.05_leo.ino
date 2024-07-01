void r();
void b();
void s();
void f();
void l();

void setup()
{
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop()
{
  f();
  delay(1000);
  b();
  delay(1000);
  s();
  delay(1000);
  r();
  delay(1000);
  l();
  delay(1000);
}

void f()
{
  digitalWrite(6, LOW);
  analogWrite(5, 100);
  digitalWrite(10, HIGH);
  analogWrite(9, 100);
}

void b()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 100);
  digitalWrite(10, LOW);
  analogWrite(9, 100);
}

void s()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 255);
  digitalWrite(10, HIGH);
  analogWrite(9, 255);
  tone(4, 440, 500);
}

void l()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 100);
  digitalWrite(10, HIGH);
  analogWrite(9, 100);
}

void r()
{
  digitalWrite(6, LOW);
  analogWrite(5, 100);
  digitalWrite(10, LOW);
  analogWrite(9, 100);
}
