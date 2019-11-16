function M = showGraphs(answer)
% SHOWGRAPHS - Function to return movie visualization 
% of grids in graphList
map = [0 0 0;        %dead   black
       1 1 0];       %alive yellow
colormap(map);
m = size(answer, 3);
for k = 1:m
   g = answer(:, :, k);
   image(g + 1)
   axis off
   axis square
   M(k) = getframe;
end;
end
