import Card from 'react-bootstrap/Card';

export default function GitHubCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQHi6O5TVMl7ow/profile-displayphoto-shrink_200_200/0/1645913746296?e=1659571200&v=beta&t=GZc-bmyGA1U8wGTB-I8UWtZPErw9gxxF8fIinR4757Q" />
                <Card.Body>
                    <Card.Title>@brentonring</Card.Title>
                    <Card.Text>
                    I am a software developer student based in Fort Collins, CO.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
