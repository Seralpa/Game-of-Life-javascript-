let size = 80;
let grid = new Array(size);
for (let i=0;i<size;i++){
    grid[i]= new Array(size);
}
let cont=0;
function setup() {
    //frameRate(2);
    createCanvas(800,800);
    background(51);
    for (let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            grid[i][j]=new Cell(0,i*10,j*10);
        }//Math.round(Math.random(0,1))
    }
    /*grid[24][0].change();
    grid[22][1].change();
    grid[24][1].change();
    grid[12][2].change();
    grid[13][2].change();
    grid[20][2].change();
    grid[21][2].change();
    grid[34][2].change();
    grid[35][2].change();
    grid[11][3].change();
    grid[15][3].change();
    grid[20][3].change();
    grid[21][3].change();
    grid[34][3].change();
    grid[35][3].change();
    grid[0][4].change();
    grid[1][4].change();
    grid[10][4].change();
    grid[16][4].change();
    grid[20][4].change();
    grid[21][4].change();
    grid[0][5].change();
    grid[1][5].change();
    grid[10][5].change();
    grid[14][5].change();
    grid[16][5].change();
    grid[17][5].change();
    grid[22][5].change();
    grid[24][5].change();
    grid[10][6].change();
    grid[16][6].change();
    grid[24][6].change();
    grid[11][7].change();
    grid[15][7].change();
    grid[12][8].change();
    grid[13][8].change();*/
}   
function draw() {
    let updates=[];
    for (let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            grid[i][j].show();
            test(grid,i,j,updates);
        }
    }
    for(let i=0;i<updates.length;i++){
        grid[updates[i][0]][updates[i][1]].change();
    }
    updates=[];
    cont++;
    if(cont>50000){
        noLoop();
    }
}
function Cell(is_alive,x,y){
    this.is_alive=is_alive;
    this.x=x;
    this.y=y;
    this.show=function(){
        stroke(255);
        if(this.is_alive){
            fill(255);
        }else{
            fill(0, 0,51);
        }
        rect(this.x,this.y,10,10);
    };
    this.change=function(){
        this.is_alive=!this.is_alive;
    }
}
function test(grid,i,j,updates){
    let surrounding=0;
    let i_init=i-1;
    let j_init=j-1;
    let i_end=i+1;
    let j_end=j+1;
    if(i==0)i_init++;
    if(j==0)j_init++;
    if(i==grid.length-1)i_end--;
    if(j==grid.length-1)j_end--;
    for(let x=i_init;x<=i_end;x++){
        for(let y=j_init;y<=j_end;y++){
            if(x!=i || y!=j){
                if(grid[x][y].is_alive)surrounding++;
            }
        }
    }
    if(grid[i][j].is_alive){
        if(surrounding<2 || surrounding>3){
            updates.push([i,j]);
        }
    }
    else{
        if(surrounding==3){
            updates.push([i,j]);
        }
    }
}
function mouseClicked(){
    let x=mouseX;
    let y=mouseY;
    let i=int(x/10)
    let j=int(y/10)
    grid[int(x/10)][int(y/10)].change();
    grid[int(x/10)][int(y/10)].show();
}
    
    
    
    
    
    
    
    
    