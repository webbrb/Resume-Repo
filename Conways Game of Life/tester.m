function answer = tester(n,t,y)
%{
  Tester takes 3 parameters and runs Conway's Game of Life
  Returns answer: 3 dimensional array of nXn with T number of iterations

  answer is set = to grids on the last line.  We are really returning grids
  Grids a a nXn array with T iterations on the 3rd dimension (n X n X t)
  Iteration 1 handled separately.
     Set initial state
     Load initial state into the first "frame" of the grids / answer array

  We are using 2 temp arrays of size nXn.
     CUR - current TIME.  We READ  CUR to see if cells live or die in NEW
     NEW - Time + 1    .  We WRITE NEW based on readings from CUR

     When CUR and NEW are filled out each cycle;
       Append CUR frame to back of the grids (answer) array using cat(3,..)          
       Overwrite CUR with a copy of NEW (CUR=NEW)
       Reset NEW to all zeros
       Rinse and repeat until T iterations 




%}

   
% handle first iteration
    % add +2 to array size for Periodic border.  
    n1 = n + 2;
    %disp(n1);

%########################
%  start size definitions
%########################
    
    % create CUR 2 dim array 
        % set CUR = initial shape
        
        
        %random shape
        if y==1
            CUR1=randi(2,[n1,n1]);
            CUR=[n1,n1];
              
            % Translates CUR1 array of (1,2) to CUR of (0,1)
            for i=1:n1
                for j=1:n1                   
                    if CUR1(i,j)==1
                        CUR(i,j) =0;
                    else
                        CUR(i,j) =1;
                    end
                end
            end    
        end
        %disp(CUR1);
        %disp(CUR);   
        
        
                     % if y =2 then block shape runs
                    if y==2
                        CUR1 = zeros(n1);
                        location = floor(n1/2);
                        CUR1(location,location) = 1;
                        CUR1(location,location -1) =1;% west
                        CUR1(location +1, location)=1;  %south
                        CUR1 (location +1, location-1) =1;   %soutwest

                        CUR=CUR1;
                    end
         %disp(CUR);       
         
                 %glider Shape
                 if y==3
                     CUR1 = zeros(n1);
                     
                     location = floor(n/2);

                     CUR1(location,location) = 1;
                     CUR1(location-1,location) = 1;  %north
                     CUR1(location +1,location) =1; %South
                     CUR1(location+1, location-1)=1; %SouthWEST
                     CUR1(location, location-2)=1; %cell that is northeast of farthest east cell
                     CUR=CUR1;
                 end
                 %disp(CUR);
                 
                 % pentomino
                 if y==4
                     CUR1 = zeros(n1);
                     
                     location = floor(n/2);
                     
                     CUR1(location,location)=1;
                     CUR1(location,location-1)=1;  %WEST
                     CUR1(location+1, location)=1; %SOUTH
                     CUR1(location-1, location)=1; %NORTH
                     CUR1(location-1, location+1)=1; %NORTHEAST
                     CUR=CUR1;
                  %stoplight   
                 end
                 if y==5
                     CUR1 = zeros(n1);
                     location = floor(n/2);
                     CUR1(location,location)=1;
                     CUR1(location-1,location)=1;
                     CUR1(location+1, location)=1;
                     CUR=CUR1;
                     
                 end
                 
                 %disp(CUR);
        
%########################
%  END shape definitions
%########################        
        
    % create grids to hold answers
    grids = CUR ;
                
    
%   increment for t total time slices
for k=1:t
    %disp(k);
    % reset  NEW 2 dim array to zeros 
    NEW = zeros(n1,n1);
    %disp(CUR);
    %disp(NEW);

    % READ   CUR cells and WRITE NEW cells        
        for z=1:n1
            for y=1:n1
                
                counter = 0;

                % count for north

                if z==1
                    NORTH = CUR(n1,y);
                else
                    NORTH = CUR(z-1,y);
                end 
                % count EAST
                if  y==n1
                    EAST = CUR(z,1);
                else
                    EAST = CUR(z,y+1);
                end
                %count WEST
                if y==1
                    WEST = CUR(z,n1);
                else
                    WEST = CUR(z,y-1);
                end
                %south
                if z==n1
                    SOUTH=CUR(1,y);
                else
                    SOUTH=CUR(z+1,y);

                end
  
              
                if z==1 
                    if y==n1
                        NORTHEAST = CUR(n1,1);
                    else
                        NORTHEAST = CUR(n1, y+1); 
                    end  
                  
                elseif y==n1
                         NORTHEAST = CUR(z-1,1);
                else
                         NORTHEAST = CUR(z-1,y+1);
                end
                

                if z==1
                    if y==1
                        NORTHWEST = CUR(n1,n1); 
                    else
                        NORTHWEST = CUR(n1, y-1);
                    end
                elseif y==1
                        NORTHWEST = CUR(z-1, n1);
                    else
                        NORTHWEST = CUR(z-1, y-1);
                        
                end
                
                
              
 
                if z==n1
                    if y==1
                        SOUTHWEST = CUR(1,n1);
                    else
                        SOUTHWEST = CUR(1, y-1);
                    end
                elseif y==1
                        SOUTHWEST = CUR(z+1, n1);
                else
                        SOUTHWEST = CUR(z+1, y-1);
                end
                
 
                
                
                
                if z==n1
                    if y==n1
                        SOUTHEAST = CUR(1,1);
                    else
                        SOUTHEAST = CUR(1,y+1);
                    end
                elseif y==n1
                        SOUTHEAST = CUR(z+1,1);
                else
                        SOUTHEAST = CUR(z+1, y+1);
                end
                
 %}           
                % Overwriting of CUR to NEW
                % READ  the CUR array
                % WRITE the NEW array                                            
                counter= NORTH+SOUTH+EAST+WEST+NORTHEAST+NORTHWEST+SOUTHWEST+SOUTHEAST;
                %disp(CUR);
                %disp(counter);
                
                % 3 rules
                % 1st rule:  dead + 3 = alive
                if CUR(z,y) == 0  && counter == 3
                    NEW(z,y)=1;
                % 2nd rule   alive + (2 or 3) living neighbors stays alive
                elseif CUR(z,y) == 1 && counter == 2
                    NEW(z,y) =1;
                elseif CUR(z,y) == 1 && counter == 3
                    NEW(z,y) =1;
                % OFF WITH THEIR HEADS!!!
                % 3rd rule not needed   - NEW starts as all zeros                   
                end
                
            end            
        end 
        %disp(NEW);
        %disp(CUR);
    % Append CUR to grids  (inserts copy of CUR to back of grids array)
    grids= cat(3,grids,CUR); 
    % CUR = NEW;           (set CUR=NEW for next interation of the game)
    CUR = NEW;
    
end 
 % hand over the 3 dim array GRIDS and go home
 answer = grids;  

   
end


