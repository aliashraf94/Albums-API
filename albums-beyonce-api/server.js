const { query } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },
  ];
  
  app.get("/", function (req, res) {
    res.send("Server is runinng and ready to serve.");
  });


app.get("/albums", function (req, res) {
  res.send(albumsData);
});

// Get - get album by id

app.get("/albums/:albumId", (req, res) => {
    const id = req.params.albumId
    const album = albumsData.find((each)=>{
        return each.albumId == id
    })
    if (album){
        res.send(album)
    } else {
        res.status(404).send()
    }
    // res.send(album)
});

app.post("/albums", function (req, res) {
  console.log("POST /albums route");
  const album = req.body
  // console.log(req.body)
  albumsData.push(album)
  // console.log(albumsData)
  res.status(201).send({success: true})
});

app.delete("/albums/:albumID", function (req, res) {
  const id = req.params.albumId
  albumsData.splice(id, 1)
  res.status(200).send({success: true})
});

app.listen(3000, () => console.log("Server is up and running"))