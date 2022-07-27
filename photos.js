class Photos {
    list;
    constructor() {
        this.imgCard = document.querySelector('.img-card');
        this.imgTitle = document.querySelector('.img-title');
        this.imgId = document.querySelector('.img-id');
        this.nextBtn = document.querySelector('#next-btn');
        this.prevBtn = document.querySelector('#prev-btn');
        this.currentId = 1000

        this.getImage();
        this.nextPhoto();
        this.prevPhoto();
    }

    getImage() {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.currentId}`)
            .then(data => data.json())
            .then(data => {
                const { id, title, url } = data
                this.viewPhoto(id, title, url)
            })
            .catch(err => console.log(err));
    }

    viewPhoto(id, title, url) {
        this.imgId.innerHTML = `Current ID: <span class="fw-light">${id}</span>`
        this.imgCard.src = url;
        this.imgTitle.innerHTML = `Fetched Title: <span class="fw-light">${title}</span>`

    }

    nextPhoto() {
        this.nextBtn.addEventListener('click', () => {
            this.currentId = this.currentId + 1
            this.getImage()
        })
    }

    prevPhoto() {
        this.prevBtn.addEventListener('click', () => {
            this.currentId = this.currentId - 1
            this.getImage()
        })
    }
}

const user = new Photos;