import { Formik, Form, Field } from 'formik';
const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm;
      }}
    >
      <Form>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
