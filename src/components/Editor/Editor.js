import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function Editor({content, onEditorChange}) {



    
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                // toolbar: [
                //     'undo', 'redo', '|',
                //     'heading', '|', 'bold', 'italic', '|',
                //     'link', 'insertTable', 'mediaEmbed', '-',
                //     'bulletedList', 'numberedList', 'indent', 'outdent'
                // ],


                toolbar: {
    items: [  'undo', 'redo', '|',
                    'heading', '|', 'bold', 'italic', '|',
                    'link', '-',
                    'bulletedList', 'numberedList', 'indent', 'outdent'],
    shouldNotGroupWhenFull: true
},
                plugins: [
                    Bold,
                    Essentials,
                    Heading,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    List,
                    MediaEmbed,
                    Paragraph,
                    Table,
                    Undo
                ],


                initialData: '<p>Write <i>hello</i></p>',
            }}
            data={content}
            onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data })
                onEditorChange(data);
            }}


        />
    );
}
