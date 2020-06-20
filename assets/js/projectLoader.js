main();

function main() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var projects = JSON.parse(this.responseText);
            
            for(var i = 0; i < projects.length; i++) {
                var sysName = projects[i].SystemName;
                var sysDir = 'projects/' + sysName + '/';
                var projName = projects[i].ProjectName;
                var sourceURL = projects[i].SourceURL;
                var images = projects[i].ProjectImages;
                var captions = projects[i].ImageCaptions;
                var description = projects[i].Description;
                var language = projects[i].Language;

                $('#projects').append('<article class="col-6 col-12-xsmall work-item" id="'+ sysName+ '"></article>')
                $('#' + sysName).append('<h3>' + projName + ' <a href="' + sourceURL + '" target="_blank" class="icon brands fa-github" style="padding-left: 0.6em;"></a></h3>');
                
                for(var j = 0; j < images.length; j++) {
                    if(j == 0) {
                        $('#' + sysName).append('<a href="' + sysDir + images[0] + '" class="image fit thumb"><img src="' + sysDir + images[0] + '" alt=""></a>')
                    }
                    else {
                        $('#' + sysName).append('<a href="' + sysDir + images[j] + '" class="image fit thumb"></a>')
                    }

                    $('#' + sysName).append('<h3 class="img caption">' + captions[j] + '</h3>')
                }

                $('#' + sysName).append('<p>' + description + '</p>');

                $('#' + sysName).append('<ul class="langlist"></ul>')

                for(var j = 0; j < language.length; j++) {
                    if(language[j] == "cpp")
                        $('#' + sysName).find('.langlist').append('<li class="cpp">C++</li>');
                    if(language[j] == "cs")
                        $('#' + sysName).find('.langlist').append('<li class="cs">CS</li>');
                    if(language[j] == "html")
                        $('#' + sysName).find('.langlist').append('<li class="html">HTML</li>');
                    if(language[j] == "css")
                        $('#' + sysName).find('.langlist').append('<li class="css">CSS</li>');
                    if(language[j] == "js")
                        $('#' + sysName).find('.langlist').append('<li class="js">JS</li>');
                    if(language[j] == "glsl")
                        $('#' + sysName).find('.langlist').append('<li class="glsl">GLSL</li>');
                }
            }
        }
    };

    xmlhttp.open("GET", 'projects/index.json', true);
    xmlhttp.send();
}