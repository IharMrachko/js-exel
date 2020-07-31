import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {tableResizeHandler} from "@/components/table/table.resize";

export class Table extends ExcelComponent{
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }
    toHTML() {
        return createTable(20);
    }

    onMousedown(event) {
        if(event.target.dataset.resize) {
            tableResizeHandler(this.$root, event);
        }
    }
}