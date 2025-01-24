async function makeIssue() {
    const token = process.env.GH_TOKEN;
    const OWNER = "Chocojipsa";
    const REPO = "actions";
    
    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers);
    }

    const lottoNumbers = generateLottoNumbers();
    const body = `오늘의 로또 번호는: ${lottoNumbers.join(', ')}`;

    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "행운의 숫자",
            body: body,  
        })
    });
    
    if (response.ok) {
        console.log("성공");
    } else {
        const errorData = await response.json();
        console.log("실패:", errorData);
    }
}

makeIssue();