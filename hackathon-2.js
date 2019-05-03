const csv = require('csv-parser');  
const fs = require('fs');
var readline = require('readline-sync');
var csvData=[];
var filteredData=[];
var v=0;
var w=0;
var k=[];
var no_of_values=5;
fs.createReadStream('C:\\Users\\Anamika\\Downloads\\hackathon-sheet.csv')  
  .pipe(csv())
  .on('data', (row) => {
    csvData.push(row);   
  })
  .on('end', () => {
  
var fields=['Places','Weather','Occasion','General','Pickup_Lines'];
var entered_field=[];
for(let i=0;i<5;i=i+1)
k[i]=0;
for(let i=0;i<fields.length;i+=1)
{
  entered_field[i]=readline.question('Enter value for'+fields[i]+":");
}
for(let i=0;i<fields.length;i+=1)
{
  if(entered_field[i]==='')
  no_of_values=no_of_values-1;
}
console.log(no_of_values);
var null_values=[];

  if(no_of_values===5)
  {
    for(let i=0;i<csvData.length;i=i+1)
  {
    if((entered_field[0]===csvData[i][fields[0].toString()])&&(entered_field[1]===csvData[i][fields[1].toString()])&&(entered_field[2]===csvData[i][fields[2].toString()])&&(entered_field[3]===csvData[i][fields[3].toString()])&&(entered_field[4]===csvData[i][fields[4].toString()]))
  {
    filteredData.push(csvData[i]);
  }}
  }
else if(no_of_values===4||no_of_values===3||no_of_values===2)
  {
    for(let j=0;j<5;j=j+1)
    {
      if(entered_field[j]==='')
    {
      k[j]=1;
    }
    }
    for(let i=0;i<csvData.length;i=i+1)
    {
    w=0;
    for(let j=0;j<5;j=j+1)
    {
      if(k[j]===1)
      continue;
      else if(entered_field[j]===csvData[i][fields[j].toString()])
      {
        w=w+1;
      }
    }
    if(w===(no_of_values))
    filteredData.push(csvData[i]);  
  }
}
  else
  {
    for(let i=0;i<csvData.length;i=i+1)
    {
      if((entered_field[0]===csvData[i][fields[0].toString()])||(entered_field[1]===csvData[i][fields[1].toString()])||(entered_field[2]===csvData[i][fields[2].toString()])||(entered_field[3]===csvData[i][fields[3].toString()])||(entered_field[4]===csvData[i][fields[4].toString()]))
    {
      filteredData.push(csvData[i]);
    }
  }
    }



  // else if(no_of_values===3)
  // {
  //   for(let j=0;j<5;j=j+1)
  //   {
  //     if((entered_field[(j%5)]===csvData[i][fields[(j%5)].toString()])&&(entered_field[((j+1)%5)]===csvData[i][fields[(j+1)%5].toString()])&&(entered_field[((j+2)%5)]===csvData[i][fields[(j+2)%5].toString()]))
  //     filteredData.push(csvData[i]);
  //   }
  // }
  // else if(no_of_values===2)
  // {
  //   for(let j=0;j<5;j=j+1)
  //   {
  //     if((entered_field[(j%5)]===csvData[i][fields[(j%5)].toString()])&&(entered_field[((j+1)%5)]===csvData[i][fields[(j+1)%5].toString()]))
  //     filteredData.push(csvData[i]);
  //   }
  // }
  // else if(no_of_values===1)
  // {if((entered_field[0]===csvData[i][fields[0].toString()])||(entered_field[1]===csvData[i][fields[1].toString()])||(entered_field[2]===csvData[i][fields[2].toString()])||(entered_field[3]===csvData[i][fields[3].toString()])||(entered_field[4]===csvData[i][fields[4].toString()]))
  // {
  //   filteredData.push(csvData[i])
  // }}

console.log(filteredData);
});