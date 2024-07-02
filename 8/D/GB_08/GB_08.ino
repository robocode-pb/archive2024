#include<GameBoy.h>
 GameBoy gb; 
 
 
 
 
 void setup() {
  gb.begin(15);
  Serial.begin(9600);
}

void loop() {
    delay(350);
//
//    gb.drawPoint(1,0);
//    gb.drawPoint(3,0); 
//    gb.drawPoint(0,2);
//    gb.drawPoint(3,3);
//    gb.drawPoint(4,2);
//    gb.drawPoint(1,3);
//    gb.drawPoint(2,3);
//    
//
//
//
//    gb.drawPoint(1,0+8);
//    gb.drawPoint(3+2,0+8); 
//    gb.drawPoint(0+2,2+8);
//    gb.drawPoint(3+2,3+8);
//    gb.drawPoint(4,2+8);
//    gb.drawPoint(1+2,3+8);
//    gb.drawPoint(2,3+8);
   enemy(0,0);
   enemy(4,4);
}

void enemy(int x, int y){
  gb.drawPoint(x,y);
  gb.drawPoint(x+2,x);
  gb.drawPoint(x+1,y+1);
  gb.drawPoint(x+0,y+2);
  gb.drawPoint(x+1,y+2);
  gb.drawPoint(x+2,y+2);
  gb.drawPoint(x+2,y+2);
  gb.drawPoint(x+1,y+3);
  
  /*
  8 8
   8
  888
  8 
  */ 
   
  }
  











 int x=3, y=0;
void controlPoint(){
  Serial.println(gb.getKey());
   gb.wipePoint(x,y);
   if(gb.getKey()==3)y--;
   if(gb.getKey()==6)y++;
   if(gb.getKey()==4)x--;
   if(gb.getKey()==5)x++;
   gb.drawPoint(x,y);
   if(y>14 or y<0)y=0;
   if(x>8 or x<0)x=0;
  }



   
