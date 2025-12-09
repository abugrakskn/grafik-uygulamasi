export const parseCSV = (csvText: string) => {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return null;

  const headers = lines[0].split(',').map(h => h.trim());
  
  // Assuming 1st column is labels, 2nd column is data values
  const labels: string[] = [];
  const numbers: number[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',').map(item => item.trim());
    if (row.length >= 2) {
      labels.push(row[0]);
      const val = parseFloat(row[1]);
      numbers.push(isNaN(val) ? 0 : val);
    }
  }

  return { labels, data: numbers, label: headers[1] || 'Value' };
};
