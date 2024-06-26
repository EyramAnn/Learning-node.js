import {program} from 'commander';
import { mailTransport } from './mailTransport.mjs';
program
.option('-s, --subject')
.option('-t, --to')
.option('-m, --message');

program.parse();

const options = program.opts();
const args = program.args;
console.log(options);
console.log(args);
if(options.subject && options. to && options.message){
    mailTransport.sendMail({
        from: 'noreply@shopa.life',
        to: args[1],
        subjext: args[0],
        text: args[2]
    })
    .then(console.log)
    .catch(console.log);
    // console.log('Message sent');
} else {
    console.log('Some options are missing');
}