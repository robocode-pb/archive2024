#include <GameBoy.h>
GameBoy gamboi;
int x=0, y=0;
void setup() {
  gamboi.begin(15);
  Serial.begin(9600);
}

void loop() {
  int xr = random(6);
  for(int i=-4; i<15; i++){
  delay(75);
  enemyCar(xr,i);
  delay(250);
  gamboi.clearDisplay();
  }
//  if(gamboi.getKey()==0)Serial.println("0");
//  if(gamboi.getKey()==3)Serial.println("up");
//  if(gamboi.getKey()==4)Serial.println("right");
//  if(gamboi.getKey()==5)Serial.println("left");
//  if(gamboi.getKey()==6)Serial.println("down");
//  if(gamboi.getKey()==2)Serial.println("a");
//  if(gamboi.getKey()==1)Serial.println("b");
//
//  gamboi.clearDisplay();
//  if(gamboi.getKey()==3)y--;
//  if(gamboi.getKey()==6)y++;
//  if(gamboi.getKey()==4)x--;
//  if(gamboi.getKey()==5)x++;
//  if(gamboi.getKey()==2)x++,y--;
//  if(gamboi.getKey()==1)x--,y++;
//  gamboi.drawPoint(x,y);
//  if(y>15 or y<0) y=0;
//  if(x>8 or x<0) x=0;

}


void enemyCar(int x, int y){
  gamboi.drawPoint(x+0, y+0);
  gamboi.drawPoint(x+2, y+0);
  gamboi.drawPoint(x+1, y+1);
  gamboi.drawPoint(x+0, y+2);
  gamboi.drawPoint(x+1, y+2);
  gamboi.drawPoint(x+2, y+2);
  gamboi.drawPoint(x+1, y+3);
}
