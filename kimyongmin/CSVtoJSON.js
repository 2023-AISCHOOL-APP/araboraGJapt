  const fs = require('fs');
  const csv = require('csv-parser');
  
  const csvFilePath = "C:\\Users\\gjaischool1\\Desktop\\araboraGJapt\\ksw\\rank.csv";
  const jsonFilePath = 'C:\\Users\\gjaischool1\\Desktop\\araboraGJapt\\kimyongmin\\aparttradefinal.json';
  
  const results = [];
  
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      // 컬럼 이름 배열 추출
      const columns = Object.keys(results[0]);
  
      // 컬럼별로 오브젝트 생성
      const jsonData = results.map(row => {
        const obj = {};
        columns.forEach(col => {
          obj[col] = row[col];
        });
        return obj;
      });
  
      // JSON 파일로 저장
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
  
      console.log('CSV to JSON conversion completed.');
    });
  