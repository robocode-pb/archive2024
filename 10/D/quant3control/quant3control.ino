#include <SoftwareSerial.h>

SoftwareSerial bt(3, 2); //rx, tx
char Char = ' ' ;

void r();
void b();
void s();
void f();
void l();

void setup()
{
  bt.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);

}

void loop()
{
  if (bt.available())
  {
    Char = bt.read();
    if(Char=='S')s();
    if(Char=='F')f();
    if(Char=='B')b();
    if(Char=='L')l();
    if(Char=='R')r();
  }


}
//  f();delay(1000);
//  b();delay(1000);
//  s();delay(1000);
//  l();delay(1000);
//  r();delay(1000);








//BNBNBNBNBNBNBNBNBNBNBNBNBNXWSETF5ZW3452Q6G BNY89P1488  !$**       gygygygygygygygygygyggygygygygygygygyygyggygygygyyggygygygygygyggggggggggggggggggggggggggyyyyyyyyyyplgygygygyogygyogygyogygyogygyogygykogygyolgygyogykpgyogypgyoklwgyqO[EIYJGY'qpegyi




//YNH5YJHUM6775467E57I6TUYETYRWETRYULLKNJKBJJK ,M,K,KM,KJ,KJ,.HYUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU889POIJIUHUBNHIL













void f()
{
  digitalWrite(6, LOW);
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

void s()
{
  digitalWrite(6, HIGH);
  analogWrite(5, 255);
  digitalWrite(10, HIGH);
  analogWrite(9, 255);
}

void l()
{
  digitalWrite(6, HIGH);
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
