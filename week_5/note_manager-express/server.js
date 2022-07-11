const express = require("express");
const fs = require("fs").promises;
const cuid = require("cuid");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Note Manager API" });
});

app.get("/notes", async (req, res) => {
  const { name } = req.query;
  try {
    const notesString = await fs.readFile("./notes.json", "utf-8");
    let notes = JSON.parse(notesString);
    if (name) {
      const userNotes = notes[name];
      if (!userNotes) {
        res
          .status(404)
          .json({
            msg: "Sorry, no notes for the supplied user name. Please try again with a valid name",
          });
        return;
      }
      notes = userNotes;
    }

    res.status(200).json({ msg: "Notes fetched successfully", notes });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
// /notes/rasta/1
// /notes/green
// /notes/XXXXX
app.post("/notes", async (req, res) => {
  try {
    const date = new Date().toISOString();
    const newNote = {
      id: cuid(),
      ...req.body,
      createdAt: date,
      updatedAt: date,
    };
    const notesString = await fs.readFile("./notes.json", "utf-8");

    const notesObj = JSON.parse(notesString);
    const username = req.body.name.toLowerCase();
    if (!notesObj[username]) {
      notesObj[username] = [newNote];
    } else {
      notesObj[username].push(newNote);
    }
    const newNotesDataString = JSON.stringify(notesObj);
    await fs.writeFile("./notes.json", newNotesDataString);

    res.status(201).json({ msg: "Note created successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while creating the note",
      error: error.message,
    });
  }
});
app.put("/notes/:name/:id", async (req, res) => {
  const { name, id } = req.params;
  const clientNote = req.body;
  if (!name || !id) {
    res.status(400).json({
      msg: "Sorry, the username or note id is missing. Please try again",
    });
    return;
  }
  try {
    const notesString = await fs.readFile("./notes.json", "utf-8");
    const notesObj = JSON.parse(notesString);
    const username = name.toLowerCase();
    const userNotes = notesObj[username];
    if (!userNotes) {
      res.status(404).json({
        msg: "Sorry, we can't find the notes for the user name supplied. Please try again",
      });
      return;
    }
    const noteToEdit = userNotes.find((note) => note.id === id);
    if (!noteToEdit) {
      res.status(404).json({
        msg: "Sorry, we can't find the notes for the note id supplied. Please try again",
      });
      return;
    }
    for (let key in clientNote) {
      noteToEdit[key] = clientNote[key];
    }
    noteToEdit.updatedAt = new Date().toISOString();
    const newNotesToSave = [
      ...userNotes.filter((note) => note.id !== id),
      noteToEdit,
    ];
    notesObj[username] = newNotesToSave;
    const notesObjStringToSave = JSON.stringify(notesObj);
    await fs.writeFile("./notes.json", notesObjStringToSave);
    res.status(200).json({ msg: "Note Updated successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while updating your Note. Please try again later",
      error: error.message,
    });
  }
});
app.delete("/notes/:name/:id", async (req, res) => {
  const { name, id } = req.params;
  if (!name || !id) {
    res.status(400).json({
      msg: "Sorry, the username or note id is missing. Please try again",
    });
    return;
  }
  try {
    const notesString = await fs.readFile("./notes.json", "utf-8");
    const notesObj = JSON.parse(notesString);
    const username = name.toLowerCase();
    const userNotes = notesObj[username];
    if (!userNotes) {
      res.status(404).json({
        msg: "Sorry, we can't find the notes for the user name supplied. Please try again",
      });
      return;
    }
    const noteToDelete = userNotes.find((note) => note.id === id);
    if (!noteToDelete) {
      res.status(404).json({
        msg: "Sorry, we can't find the notes for the note id supplied. Please try again",
      });
      return;
    }

    const newNotesToSave = userNotes.filter((note) => note.id !== id);

    notesObj[username] = newNotesToSave;
    const notesObjStringToSave = JSON.stringify(notesObj);
    await fs.writeFile("./notes.json", notesObjStringToSave);
    res.status(200).json({ msg: "Note Deleted successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while updating your Note. Please try again later",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
