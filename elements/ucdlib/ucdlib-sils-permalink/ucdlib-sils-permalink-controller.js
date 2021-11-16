import {Task} from '@lit-labs/task';

export class PermalinkController {
//   host;
//   value;
//   kinds = Names.kinds;
//   task;
  constructor(host, url) {
    const baseUrl = 'https://open-na.hosted.exlibrisgroup.com/alma/01UCD_INST/bibs/9981249369903126';
    this.url = url;
    this.host = host;
    this.task = new Task(
      this.host,
      async () => {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        const error = result.error;
        if (error !== undefined) {
          throw new Error(error);
        }
        return result;
      },
        
      () => [this.url]
    );

  }


  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }



}
