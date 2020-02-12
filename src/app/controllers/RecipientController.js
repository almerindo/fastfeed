import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    const data = req.body;

    if (!(await schema.isValid(data))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res
        .status(401)
        .json({ error: `Recipient ${req.body.name} already exists.` });
    }

    await Recipient.create(data);
    return res.json(data);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findByPk(req.params.id);

    if (!recipientExists) {
      return res
        .status(401)
        .json({ error: `Recipient ${req.params.id} does not exists.` });
    }

    const data = await recipientExists.update(req.body);

    return res.json(data);
  }

  async delete(req, res) {
    return res.json('Not implemented yet');
  }

  async show(req, res) {
    return res.json('Not implemented yet');
  }

  async index(req, res) {
    return res.json('Not implemented yet');
  }
}
export default new UserController();
