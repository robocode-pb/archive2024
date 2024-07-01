#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3); // RX, TX



// 1 мотор - лівий
int in1 = 5; // 1 мотор 1 контакт управління
int in2 = 6; // 1 мотор 2 контакт управління
int in3 = 9; // 2 мотор 1 контакт управління
int in4 = 10; // 2 мотор 1 контакт управління
int leftSensor = 12;  //  лівий датчик  ліній
int rightSensor = 11; //  ПРАВИЙ датчик  ліній 

int carSpeed = 100;

char value;

void setup(){
  Serial.begin(9600);
  bt.begin(9600);
  
  pinMode(in1, OUTPUT); // налаштування на вихід
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  
  pinMode(leftSensor,  INPUT);
  pinMode(rightSensor, INPUT);
}

void loop(){
  if (bt.available()) {
    value=bt.read();
    Serial.println ("bt="+String(value));
   if(value == 'F')forward();
   if(value == 'S')stp();
   if(value == 'R')right();
   if(value == 'L')left();
   if(value == 'B')backward();
  }
}

void readLine(){
  if(!digitalRead(leftSensor)){
    Serial.println("see left line");  }
  if(!digitalRead(rightSensor)){
    Serial.println("see right line");  }
}

void forward(){ // вперед
  analogWrite(in2, carSpeed); // 1 мотор 
  digitalWrite(in1, 0); // 1 мотор 
  digitalWrite(in4, 0); // 2 мотор
  analogWrite(in3, carSpeed); // 2 мотор 
}
void backward(){ // назад
  analogWrite(in1, carSpeed); // 1 мотор 
  digitalWrite(in2, 0); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite(in4, carSpeed); // 2 мотор 
}



void right(){
  analogWrite(in1, carSpeed); // 1 мотор 
  digitalWrite(in2, 0); // 1 мотор 
  digitalWrite(in4, 0); // 2 мотор
  analogWrite(in3, carSpeed); // 2 мотор 
  }

 void left(){
  analogWrite (in2, carSpeed); // 1 мотор 
  digitalWrite(in1, 0); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite (in4, carSpeed); // 2 мотор 
  }

   void stp(){
  analogWrite (in2, 0); // 1 мотор 
  digitalWrite(in1, 0); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite (in4, 0); // 2 мотор 
  }
