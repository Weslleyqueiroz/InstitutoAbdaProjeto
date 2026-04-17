import {app} from './app.ts'

const port = process.env['PORT'] || 3000

app.listen(port, () => {
    console.log(`App ouvindo na porta ${port}`);
});

process.on('SIGINT', () =>{
    console.log('App finalizado')
})