#include <SoftwareSerial.h>
#include <QuantSensors.h>

QuantLine line;
SoftwareSerial bt(3, 2); //rx, tx
char Char = ' ' ;

void r();
void b();
void s();
void f();
void l();

void setup()
{
 
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);
Serial.begin(9600);
  
  line.begin(true);    // Запуск датчиків лінії з Debug в монітор порта
  line.setLevel(100);  // Встановлюємо рівень на датчиках, якщо сигнал менше ніж 100, то буде 0 відправляти  команда line.readLineSensorBool(), якщо більше 100, то line.readLineSensorBool() відправляє 1.
  bt.begin(9600);
}

void loop(){
  for (uint8_t i = 0; i < 8; i++) {
    Serial.print(line.readLineSensor(i));
    Serial.print("\t");
    Serial.println();  
  }
   
   
   if (bt.available())
  {
    Char = bt.read();
    if ('S' == Char)s();
  if ('F' == Char)f();
  if ('R' == Char)r();
  if ('L' == Char)l();
  if ('B' == Char)b();
  }


//f(); delay(1000);
//b(); delay(1000);
//s(); delay(1000);
//r(); delay(1000);
//l(); delay(1000);
}


void f()
{
  digitalWrite(6, LOW);
  analogWrite(5, 100);
  digitalWrite(10, HIGH);
  analogWrite(9, 100);
}

void l()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 100);
  digitalWrite(10, HIGH);
  analogWrite(9, 100);
}

void s()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 255);
  digitalWrite(10, HIGH);
  analogWrite(9, 255);
}

void b()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 100);
  digitalWrite(10, LOW);
  analogWrite(9, 100);
}

void r()
{
  digitalWrite(6, LOW);
  analogWrite(5, 100);
  digitalWrite(10, LOW);
  analogWrite(9, 100);
}
