import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'mk-root',
    standalone: true,
    imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule],
    templateUrl: './app.template.html',
    styles: [],
})
export class AppComponent {
    title = 'todo';
}
