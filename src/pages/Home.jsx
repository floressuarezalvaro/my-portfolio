import Paper from "@mui/material/Paper";

function Home() {
  return (
    <main>
      <img
        src='./TitleCard.jpeg'
        alt='background'
        className='background-image'
      />
      <Paper elevation={3} className='paper'>
        <h2>Welcome!</h2>
        <p>
          Welcome! My name is Alvaro Flores Suarez. I've created this webpage so
          that you could learn more about me, see my most updated resume, and
          find various ways to contact me. Feel free to browse around, or just
          contact me so we can get in touch!
          <br />
          <br />
          As a first generation college graduate, I've come to learn more about
          the privileges that I have. With a little work ethic and a positive
          attitude, I believe there are countless possibilities lying ahead of
          us. That being said, here are a few values that I stand by through my
          work and personal life:
        </p>

        <ol>
          <li>
            See the beauty in the struggle, and show others along the way.
          </li>
          <li>Listen to others, before you speak.</li>
          <li>Never stop learning, and teach others what you've learned.</li>
          <li>
            Believe in yourself, even when the odds are stacked against you.
          </li>
        </ol>

        <p>
          As much as I enjoy my fast-paced life, I also appreciate slowing down
          and lounging with my family and friends. I like to stay active and try
          to go hiking whenever I get the chance. I'm keen on connecting with
          new people, organizations, and causes. Feel free to message me, even
          if we aren't in the same field. I learn the most from people with
          different backgrounds and occupations. Looking forward to connecting
          with you, and hopefully speaking with you soon!
        </p>
      </Paper>
    </main>
  );
}

export default Home;
