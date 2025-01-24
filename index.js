async function makeIssue() {
    const token = process.env.GITHUB_TOKEN;
    const OWNER = "Chocojipsa";
    const REPO = "actions";
    
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "행운의 숫자",
            body: `${Math.floor(Math.random() * 100) + 1}`,  
        })
    });
    
    if (response.ok) {
        console.log("성공");
    } else {
        const errorData = await response.json();
        console.log("실패:", errorData);
    }
}