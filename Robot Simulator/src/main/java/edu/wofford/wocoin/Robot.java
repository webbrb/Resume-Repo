
package edu.wofford.wocoin;


public class Robot{
    GridPosition currentPos;
    Orientation direction;


    public Robot(GridPosition curr, Orientation looking){
        currentPos = curr;
        direction = looking;
    }

    public Orientation getOrientation(){

        return direction;
    }


    public GridPosition getGridPosition(){
        return currentPos;
    }

    public void simulate(String s){
        int sLength = s.length();

        for(int i=0; i< sLength; i++){
            if(s.charAt(i) == 'R' ) {
                turnRight();
            }
            else if(s.charAt(i) == 'L') {
                turnLeft();
            }
            else if(s.charAt(i) == 'A') {
                advance();
            }
        }
    }

    public void advance(){
        if(getOrientation() == Orientation.NORTH){
            currentPos = new GridPosition(currentPos.getX(), currentPos.getY() + 1 );
        }
        else if(getOrientation() == Orientation.SOUTH){
            currentPos = new GridPosition(currentPos.getX(), currentPos.getY() - 1 );
        }
        else if (getOrientation() == Orientation.EAST){
            currentPos = new GridPosition(currentPos.getX() +1 , currentPos.getY() );
        }
        else {
            currentPos = new GridPosition(currentPos.getX() -1 , currentPos.getY() );
        }

    }

    public void turnLeft(){
        if(getOrientation() == Orientation.NORTH){
            direction = Orientation.WEST;
        }
        else if(getOrientation() == Orientation.WEST){
            direction = Orientation.SOUTH;
        }
        else if(getOrientation() == Orientation.SOUTH){
            direction = Orientation.EAST;
        }
        else if(getOrientation() == Orientation.EAST){
            direction = Orientation.NORTH;
        }

    }

    public void turnRight(){
        if(getOrientation() == Orientation.NORTH){
            direction = Orientation.EAST;
        }
        else if(getOrientation() == Orientation.EAST){
            direction = Orientation.SOUTH;
        }
        else if(getOrientation() == Orientation.SOUTH){
            direction = Orientation.WEST;
        }
        else if(getOrientation() == Orientation.WEST){
            direction = Orientation.NORTH;
        }
    }








}

