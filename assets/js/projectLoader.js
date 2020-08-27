main();

function main() {
    // Use XML HttpRequest to load local file
    // and parse index.json as a JSON file
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var projects = JSON.parse(this.responseText);
            
            // Loop through each project found in index.json
            for(var i = 0; i < projects.length; i++) {
                // Store project information in temporary variables
                // to reduce the variable name size used later
                var sysName = projects[i].SystemName;
                var sysDir = 'projects/' + sysName + '/';
                var projName = projects[i].ProjectName;
                var sourceURL = projects[i].SourceURL;
                var youtubeURL = projects[i].YoutubeURL;
                var images = projects[i].ProjectImages;
                var captions = projects[i].ImageCaptions;
                var description = projects[i].Description;
                var language = projects[i].Language;

                // Add article object in the projects section of
                // index.html with project name being the header
                $('#projects').append('<article class="col-6 col-12-xsmall work-item" id="'+ sysName+ '"></article>')
                $('#' + sysName).append('<h3 class="projectTitle" style="display: inline">' + projName + ' </h3>');
                
                for(var j = 0; j < images.length; j++) {
                    if(j == 0) {
                        // Make sure the first image of the project
                        // gallery is visible to click on
                        $('#' + sysName).append('<a href="' + sysDir + images[0] + '" class="image fit thumb"><img src="' + sysDir + images[0] + '" alt=""></a>')
                    }
                    else {
                        // Add the remaining project images but do
                        // not show them to the user
                        $('#' + sysName).append('<a href="' + sysDir + images[j] + '" class="image fit"></a>')
                    }

                    // Match captions found in index.json to the
                    // respective project images in the gallery
                    $('#' + sysName).append('<h3 class="img caption">' + captions[j] + '</h3>')
                }

                // Add the project description underneath the
                // project preview image
                $('#' + sysName).append('<p>' + description + '</p>');

                // Append the languages used to develop a listed
                // project in the project's title found in the h3 header
                var out = '(';

                for(var j = 0; j < language.length; j++) {
                    out += language[j];

                    if(j < language.length - 1)
                        out += ", ";
                }

                out += ')';

                $('#' + sysName).find('.projectTitle').append('<h3 class="lang">' + out + '<h3>');

                if(sourceURL) {
                    $('#' + sysName).find('.lang').append('<a href="' + sourceURL + '" target="_blank" class="icon brands fa-github srcIcon" style="padding-left: 0.6em;"></a>')
                }

                if(youtubeURL) {
                    $('#' + sysName).find('.lang').append('<a href="' + youtubeURL + '" target="_blank" class="icon brands fa-youtube srcIcon" style="padding-left: 0.6em;"></a>')
                }
            }
        }
    };

    xmlhttp.open("GET", 'projects/index.json', true);
    xmlhttp.send();
}