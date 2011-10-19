# PicasaApiHelperJS

**PicasaApiHelperJS** - Simple helper for getting photo url and caption from Picasa album.

This library and the sample code is Open Source under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

**Author(s):**

* [Juha Suomalainen](https://github.com/JuhaS)

**Requirements:**

* JQuery 

**Limitations:**

* Only works on browsers that support cross site ajax calls (limitation of jQuery.ajax() ). 

## Features

This helper provides two fuctions. Both do the same thing in different ways. 

* **blockingParseLinks(picasaUserName, picasaCollectionName)**: This function takes two arguments that it uses to form the url for the request. It returns an list of url-caption pairs in a dictionary.

* **parseLinks(picasaUserName, picasaCollectionName, cb)**: This is asynchronous version of the function. The callback (cb) is initiated with the list or url-caption pairs after the data is received and parsed.

## How to use PicasaApiHelperJS


            // Setup
            picasaUserName = "testUser";
            picasaCollectionName = "testAlbum";
            
            // Blocking way: Show first 5 photos on bottom of the page.
            links = blockingParseLinks(picasaUserName, picasaCollectionName);
            for (var i = 0; i<5 ; i++) {
	            $('body').append('<div><p>' + links[i].caption + '<p/><img src=\"' + links[i].url + '\"/></div>');
            }
            
            // Non-blocking way: Show last 5 photos on bottom of the page .
            parseLinks(picasaUserName, picasaCollectionName, function (links) {
                    for (var i = links.length; i<links.length-5 ; i--) {
	                    $('body').append('<div><p>' 
	                      + links[i].caption 
	                      + '<p/><img src=\"' 
	                      + links[i].url 
	                      + '\"/></div>');
                    }
                });

## More info

* All contributions are welcome.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.