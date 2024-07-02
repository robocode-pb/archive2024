// https://wokwi.com/projects/398940350411039745
#include <SoftwareSerial.h>
SoftwareSerial bt(3, 2); //rx, tx
#include <QuantSensors.h>
QuantLine line;

void setup(){
  bt.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);
  Serial.begin(9600);
  line.begin(true);
  line.setLevel(100);
}

void loop(){
  for (int i = 0; i < 8; i++)
    Serial.print(String(line.readLineSensorBool(i))+"\t");
  Serial.println();
  delay(100);

  //?????
  
}

//  if (bt.available()){ // чи доступні данні з блютуза
//    char Char = bt.read();
//    if(Char == 'S') s();
//    if(Char == 'F') f();еннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннььььььььььььььььь
//    if(Char == 'B') b();
//    if(Char == 'L') l();
//    if(Char == 'R') r();
//  }
//  f(); delay(1000);
//  b(); delay(1000);ііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііііікіііііііііікірккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккккіркккккккккккквововооооооооооооооооооооооооооооооввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввкпьччччччччччччччччччччччччччччччччччччччччччччччччччччччччоььььььььььььььььььььььььььььььььььььььььььььььььььчочопьчмопммомчкьмтьмчвотрмчкьагпиогапміврьмпсмішчатівпаміпмвпмапчмапсмаіпвмсаівмпсмівамавмаміавміавміавміавміавміавімавміеквіавіевміеавіавіева
//  s(); delay(1000);
//  l(); delay(1000);
//  r(); delay(1000);


void f()
{тлдукіепгк45еи
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
