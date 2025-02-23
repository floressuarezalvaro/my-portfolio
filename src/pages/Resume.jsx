import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Resume() {
  return (
    <main>
      <Paper elevation={3} className='paper'>
        <h2>Resume</h2>
        <p>Welcome to my resume!</p>
        <p>This is a work in progress</p>
        <Button
          href='/floresSuarezResume.pdf'
          target='_blank'
          sx={{ my: 2, color: "blue", display: "block" }}
        >
          Resume
        </Button>
      </Paper>
    </main>
  );
}

export default Resume;
