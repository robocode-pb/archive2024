#include <SoftwareSerial.h>
SoftwareSerial bt(2,3);

// 1 мотор - лівий
int in1 = 5; // 1 мотор 1 контакт управління
int in2 = 6; // 1 мотор 2 контакт управління
int in3 = 9; // 2 мотор 1 контакт управління
int in4 = 10; // 2 мотор 1 контакт управління
int leftSensor = 12;  //  лівий датчик  ліній
int rightSensor = 11; //  ПРАВИЙ датчик  ліній 

int carSpeed = 100;
bool autopilot = true;

void setup(){
  Serial.begin(9600);
  bt.begin(9600);
  
  pinMode(in1, OUTPUT); // налаштування на вихід
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(13, OUTPUT);
  
  pinMode(leftSensor,  INPUT);
  pinMode(rightSensor, INPUT);
}
char value;
 

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



void backwardRight(){
  analogWrite(in1, 0); // 1 мотор 
  digitalWrite(in2, 0); // 1 мотор 
  digitalWrite(in4, carSpeed); // 2 мотор
  analogWrite(in3, 0); // 2 мотор 
  }


void right(){
  analogWrite(in1, carSpeed); // 1 мотор 
  digitalWrite(in2, 0); // 1 мотор 
  digitalWrite(in4, 0); // 2 мотор
  analogWrite(in3, carSpeed); // 2 мотор 
  }


void forwardRight(){
  analogWrite(in1, 0); // 1 мотор 
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
   void backwardLeft(){
  analogWrite (in2, 0); // 1 мотор 
  digitalWrite(in1, carSpeed); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite (in4, 0); // 2 мотор 
  }
   void forwardLeft(){
  analogWrite (in2, carSpeed); // 1 мотор 
  digitalWrite(in1, 0); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite (in4, 0 ); // 2 мотор 
  }

   void stp(){
  analogWrite (in2, 0); // 1 мотор 
  digitalWrite(in1, 0); // 1 мотор 
  digitalWrite(in3, 0); // 2 мотор
  analogWrite (in4, 0); // 2 мотор 
  }

void loop(){
  if (bt.available()){
    value = bt.read();
    Serial.println("Receive from Bluetooth: "+String(value));
    if      (value == 'S'){ stp(); } 
    else if (value == 'F'){ f||ward(); } // forward
    else if (value == 'B'){ backward(); } // backward
    else if (value == 'L'){ left(); } // left
    else if (value == 'R'){ right(); } // right
    else if (value == 'G'){ forwardLeft(); } // forwardLeft
    else if (value == 'I'){ forwardRight(); } // forwardRight
    else if (value == 'H'){ backwardLeft(); } // backwardLeft
    else if (value == 'J'){ backwardRight(); } // backwardRight 
    else if (value == 'a'){ } 
    if(autopilot){
    bool l = digitalRead(leftSensor);      
    bool r = digitalRead(rightSensor);  
    if(l == HIGH && r == LOW){ delay (50); 
    }else 
    if(l == LOW && r == HIGH){delay(50);
    }else
    if(l == HIGH && r == HIGH){forward();
    }else
    if(l == LOW && r == LOW){f||ward();
    }  
      
      }
  }
}



void sos(){
digitalWrite(13,HIGH);//Папуга на палмі спала.Папуга із палми впалаю.Дума папуга так. Треба купити гамак.
delay(250);
digitalWrite(13,LOW);
delay(250);  
digitalWrite(13,HIGH);
delay(500);
digitalWrite(13,LOW);
delay(500);
digitalWrite(13,HIGH);
delay(250);
digitalWrite(13,LOW);
delay(250);  

  }
  
