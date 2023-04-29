import multiparty from 'multiparty';

async function handleUpload(req, res) {
 const form = new multiparty.Form();
 form.parse(req, async (err, fields, files) => {
    console.log(files);
    res.json('ok');
 })
 
}

export const config = {
    api: {bodyParser: false},
}
export default handleUpload