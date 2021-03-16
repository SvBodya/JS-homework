// $('.carousel').carousel();
const $searchForm = $('#search-form');
const $input = $('[name="video-name"]');
const $nextVideo = $('#next');
const $prevVideo = $('#prev');
const $carouselid = $('#carousel-id');
let videos = [];

function playVid(vid) {
    vid.play();
}
function pauseVid(vid) {
    vid.pause();
}

const createContent = (data) => {
    videos = [];
    videos = JSON.parse(data);
    $("div#carousel-id").empty();
    for (const item in videos.results) {
        if (item == 0) {
            $('<div>')
                .append(
                    $('<video>')
                        .attr({
                            src: videos.results[item].previewUrl,
                            autoplay: "autoplay",
                            loop: "loop",
                            controls: "controls"
                        })
                        .addClass("d-block w-100")
                )
                .addClass('carousel-item active')
                .appendTo($('#carousel-id'))
                .attr("id", item);
            console.log(videos.results[item].previewUrl);
        } else {
            $('<div>')
                .append(
                    $('<video>')
                        .attr({
                            src: videos.results[item].previewUrl,
                            loop: "loop",
                            controls: "controls"
                        })
                        .addClass("d-block w-100")
                )
                .addClass('carousel-item')
                .appendTo($('#carousel-id'))
                .attr("id", item);
        }
    }
};
$nextVideo.on('click', function (event) {
    let vidCurr = document.querySelector("div.active > video");
    pauseVid(vidCurr);
});

$prevVideo.on('click', function (event) {
    let vidCurr = document.querySelector("div.active > video");
    vidCurr = document.querySelector("div.active > video");
    // pauseVid(vidCurr);
    pauseVid(vidCurr);
    // let vidCurr2 = document.querySelector("div > video");
    // playVid(vidCurr2);
    // vidCurr.addEventListener("change",
    //     pauseVid(vidCurr)
    // )
});

const getVideos = (data) => {
    $.get('https://itunes.apple.com/search', {
        limit: "10",
        entity: "musicVideo",
        term: data
    })
        .done((response) => createContent(response))
        .fail((error) => console.log("error", error));
};

$searchForm.on('submit', (event) => {
    event.preventDefault();
    const text = $input.val().replaceAll(' ', '+');
    // const text = $input.val().replace(/\s/g, '+');
    getVideos(text);
});