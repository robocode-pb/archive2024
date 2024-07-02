#include <GameBoy.h>
GameBoy gb;

void setup() {
  gb.begin(15); // від 1 до 16
  Serial.begin(9600);
}
int xp = 1; 
void loop() {
  // цикл ДЛЯ 14 кроків падіння
  int xr = random(2)*3+1;
  for(int i=0; i<15; i++){
    delay(250);
    gb.clearDisplay();
    if(gb.getKey()== 4)xp =1;
    if(gb.getKey()== 5)xp =4;
    enemyCar(xr, i);
    playerCar(xp,12);
  }
}

// функція малює ворожу машину
// з кординатою зсуву (верхній лівий кут) х,y
void enemyCar(int x, int y){
  gb.drawPoint(x+0, y+0); // верхній лівий піксель
  gb.drawPoint(x+2, y+0); // верхній правий піксель
  gb.drawPoint(x+1, y+1); 
  gb.drawPoint(x+0, y+2); // нижнє ліве  колесо
  gb.drawPoint(x+1, y+2); // нижнє праве колесо
  gb.drawPoint(x+2, y+2);
  gb.drawPoint(x+1, y+3); // нижній середній піксель
}

void playerCar(int x, int y){
  gb.drawPoint(x+1, y+0); // ніс
  gb.drawPoint(x+0, y+1); // верхнє ліве  колесо
  gb.drawPoint(x+1, y+1); 
  gb.drawPoint(x+2, y+1); // верхнє праве  колесо
  gb.drawPoint(x+1, y+2); 
  gb.drawPoint(x+0, y+3); // нижнє ліве  колесо
  gb.drawPoint(x+2, y+3); // нижнє праве колесо
}



int x=3, y=0;
void controlPoint(){
  Serial.println(gb.getKey());
  gb.wipePoint(x,y);
  if(gb.getKey()== 3) y--;
  if(gb.getKey()== 6) y++;
  if(gb.getKey()== 4) x--;
  if(gb.getKey()== 5) x++;
  gb.drawPoint(x,y);
  if(y>14 or y<0) y=0; 
  if(x>8 or x<0) x=0; 
  }
