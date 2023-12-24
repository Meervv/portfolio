import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreateArticle() {
    return (
        <div className="createArticlePage">
            <Formik>
                <Form>
                    <label>Titre: </label>
                    <Field id="inputCreateArticle" name="title" placeholder="(Ex. titre...)"></Field>
                    <label>Content: </label>
                    <Field id="inputCreateArticle" name="title" placeholder="(Ex. description...)"></Field>
                    <label>Date: </label>
                    <Field id="inputCreateArticle" name="title" placeholder="(Ex. 12/12/2023...)"></Field>
                    <button type="submit"> Créer un article</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateArticle;