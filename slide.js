// probably use a proper router...
const navigate = (route) => window.location.hash = route

//photo album (could come from an api that lists a folder's contents)
const photos = ['photo1.png','photo2.png', 'photo3.png']

// return the next photo after navigation in a direction
const nextPhoto = (photos, photo, skip) => 
    photos.indexOf(photo) > -1 // photo exists...
    && photos.indexOf(photo) + skip < photos.length // and navigating won't fall off the end...
        ? photos.indexOf(photo) + skip > -1 // navigating won't fall off the start...
            ? photos[photos.indexOf(photo) + skip] // return the next photo
            : photos[photos.length - 1] // return the last photo
        : photos[0] //return the first photo

// display a photo
const display = (photos, photo) => {
    if (photo===nextPhoto(photos, photo, 0)) {
        document.getElementById("slide").src=`./${photo}` // update the dom with the photo's path
    } else {
        navigate(nextPhoto(photos, photo, 0)) // navigate to an extant photo
    }
}

// listen for hash change and page load
onhashchange = onload = () => display(photos, location.hash.substring(1))	