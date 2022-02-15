import { Request, Response, Router } from 'express';
import { ExampleController } from '../controllers/example.controller';

class ExampleRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        const exampleController = new ExampleController;

        this.router.get('/', exampleController.getExamples);
        this.router.post('/', exampleController.createExample);
        this.router.get('/:id', exampleController.getExampleById);
        this.router.put('/:id', exampleController.updateExample);
        this.router.delete('/:id', exampleController.deleteExample);

        //--Other Way--//
        // this.router.route('/')
        //     .get(exampleController.getExamples)
        //     .post(exampleController.createExample);
        // this.router.route('/:id')
        //     .get(exampleController.getExampleById)
        //     .put(exampleController.updateExample)
        //     .delete(exampleController.deleteExample);

    }

}

const exampleRouter = new ExampleRouter();
export default exampleRouter.router;