//ini fungsi untuk membuat slug

exports.convertToSlug = (Text) => {
    return Text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}