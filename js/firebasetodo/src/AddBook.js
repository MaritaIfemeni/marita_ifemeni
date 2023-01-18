import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [book, addBook] = useState({
    title: "",
    author: "",
    year: "",
    isbn: "",
    price: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    addBook({ title: "", author: "", year: "", isbn: "", price: "" });
  };
  const handleSave = () => {
    props.addBook(book);
    handleClose();
  };

  const inputChanged = (event) => {
    addBook({ ...book, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add todo
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={book.title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          />
          <TextField
            name="author"
            value={book.author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth
          />
          <TextField
            name="year"
            value={book.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth
          />
          <TextField
            name="isbn"
            value={book.isbn}
            onChange={inputChanged}
            margin="dense"
            label="ISBN"
            fullWidth
          />
          <TextField
            name="price"
            value={book.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddBook;
