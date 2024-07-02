// 1 мотор - лівий
int in1 = 5; //10 1 мотор 1 контакт управління
int in2 = 6; //9 1 мотор 2 контакт управління
int in3 = 9; //5 2 мотор 1 контакт управління
int in4 = 10; //6 2 мотор 1 контакт управління
int leftSensor = 12; //  лівий датчик  ліній
int rightSensor = 11; 

void setup(){
  Serial.begin(9600);
  
  pinMode(in1, OUTPUT); // налаштування на вихід
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  
  pinMode(leftSensor,  INPUT_PULLUP);
  pinMode(rightSensor, INPUT_PULLUP);
}

void loop(){
 readLine();
  delay(200);
}

void readLine(){
  if(!digitalRead(leftSensor)){
    Serial.println("see left line");  }
  if(!digitalRead(rightSensor)){
    Serial.println("see right line");  }
}












void forward(){ // вперед
  digitalWrite(in1, 0); // 1 мотор наза ditalWrite(in2, 1); // 1 мотор вперед
  digitalWrite(in4, 0); // 2 мотор назад
  digitalWrite(in3, 1); // 2 мотор вперед
}
void backward(){ // назад
  digitalWrite(in1, 1); // 1 мотор назад
  digitalWrite(in2, 0); // 1 мотор вперед
  digitalWrite(in4, 1); // 2 мотор назад
  digitalWrite(in3, 0); // 2 мотор вперед
}

void str() {
   digitalWrite(LOW); 
  digitalWrite(LOW);
  digitalWrite(LOW);
  digitalWrite(LOW); 
}
