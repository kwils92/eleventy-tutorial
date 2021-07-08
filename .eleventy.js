module.exports = function(eleventyConfig) {
    //This specifies this folder should be passed THROUGh the output 11ty is producing 
    //No processing steps involved. Just the content 
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("css")
    return {
        passthroughFileCopy: true
    }

    
}