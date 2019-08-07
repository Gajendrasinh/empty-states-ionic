import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { EmptyStateComponent  } from './empty-state.component';



describe('EmptyStateComponent', () => {

    let component: EmptyStateComponent;
    let fixture: ComponentFixture<EmptyStateComponent>;
  

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EmptyStateComponent ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
        component = null;
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
