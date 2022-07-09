hexo.extend.helper.register('get_tags', function(item){
    tags = [];
    for (let tag of item.tags.data) {
        tags.push(tag.name);
    }
    return tags
});


hexo.extend.helper.register('has_common_tags', function(tagListA, tagListB) {
    for (let tag of tagListA) {
        if (tagListB.includes(tag)) return true;
    }
    return false;
});


// hexo.extend.filter.register('after_render:html', (data) => {
//     console.log(typeof data);
// });