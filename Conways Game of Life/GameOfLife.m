%{ 
  get input of (n, t, y)
     n is size of x and y axis  
     t is time  - number of iterations
     y is starting shape

 Codes to determine starting SHAPES 
    1) random alive and dead cells
    2) block shape
    3) glider shape
    4) R pentomino
    5) stoplight
%}     
   
answer = tester(20,1100,4); 



%//create and play movie
M = showGraphs(answer)
movie(M,1)

%{
v = VideoWriter('Pentomino.avi');
uncompressedVideo = VideoWriter('Pentomino.avi');
v.FrameRate=10;
open(v);
writeVideo(v, M);
close(v);
%}