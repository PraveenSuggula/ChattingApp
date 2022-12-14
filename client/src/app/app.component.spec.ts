import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';

describe('AppComponent',() => {
  let comp : AppComponent;

  beforeAll(() => {
    console.log("BeforeAll");
  });
  
  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports:[RouterTestingModule, HttpClientModule, ReactiveFormsModule],
        declarations:[AppComponent],
        providers:[AppComponent]
      }).compileComponents();
      comp = TestBed.inject(AppComponent);
      console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  it('Increase count',() => {
    comp.IncrementCountUT(2);
    expect(comp.countUnitTest).toEqual(12)
    console.log('Increase');
  })

  it('Decrease count',() => {
    comp.DecrementCountUT(2);
    expect(comp.countUnitTest).toEqual(8)
    console.log('Decrease');
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })
});


xdescribe('AppComponent', () => {
  let component : AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[AppComponent]
    }).compileComponents();
    component = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular deployed'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular deployed');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('client app is running!');
  });

  it('my test case',() => {
    expect(true).toBeTruthy();
  });
  
  it('show alert message',() =>{ // ng test --include src\app
    expect(component.showMessageUT('Hello')).toBe('Hello');
  });

  it('show the calculator result',() => {
    expect(Addition(2,3)).toBeLessThan(15);
  });

  it('to be applicable for premitive',() => {
    expect('2').toBe('2');
  });

  it('to be failed for non premitive data types',() => {
    let a = ['1'];
    let b = ['1']
    //expect(a).toBe(a); failed because of array. Then use toEqual
    expect(a).toEqual(b);
  });

  it('to be true',() => {
    let a = true // a = false
    expect(a).toBeTrue(); // toBeFalse();
    
    expect(true).toBeTruthy(); // true
    expect('1').toBeTruthy(); // true
    //expect(0).toBeTruthy(); // false
    //expect(undefined).toBeTruthy(); //false
    //expect(NaN).toBeTruthy(); //false
    //expect(false).toBeTruthy(); // false
    //expect('').toBeTruthy(); // false
  });

  it('to be greaterThan', () => {
    let a = 6;
    expect(a).toBeGreaterThan(5);
  });

  it('to match -- used for Regex expressions',() => {
    var input = "sample regexinput";
    var strPhone = "011-111-45-33";
    expect(input).toMatch(/regexinput/);
    expect(input).toMatch(/regexinput/i);
    expect(input).not.toMatch(/reg2/);
    expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  });

  it('toBeCloseTo -- used to check for max matched precision',() => {
    var pi =3.1415926, e = 2.78;
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e,0);
    expect(4.334).toBeCloseTo(4.334);
    expect(4.334).toBeCloseTo(4.3345,1);
    expect(4.334).toBeCloseTo(4.334,2);
    expect(4.334).not.toBeCloseTo(4.3,2);
    expect(4.223).not.toBeCloseTo(4.22,3);
    expect(4.223).not.toBeCloseTo(4.22,4);
  });

  it('toBeDefined -- used to check weather initialized or not',() => {
    var MyObj ={
      foo: "foo"
    };
    var myFunction = (function() {})();
    var strUndefined;
    var strDefined = "hello";
    expect("A sample test").toBeDefined();
    expect(MyObj).toBeDefined();
    expect(myFunction).not.toBeDefined();
    expect(strUndefined).toBeUndefined(); //toBeUndefined() === .not.toBeDefined();
    expect(strDefined).toBeDefined();
  });

  it('toBeNull -- check for null values',() => {
    var nullValue = null;
    var valueUndefined;
    var notNull = "notNull";
    expect(null).toBeNull();
    expect(nullValue).toBeNull();
    expect(valueUndefined).not.toBeNull();
    expect(notNull).not.toBeNull();
  });

  it('toContain -- check array contains that element or item',() => {
    var MyArray = ["jasmine","Dotnet","Angular","WebAPI"];
    expect([1,2,3]).toContain(2);
    expect([1,2,3]).toContain(2,3);
    expect([1,2,3]).toContain(2);
    expect(MyArray).toContain("jasmine");
    expect([1,2,3]).not.toContain(4);
    expect(MyArray).not.toContain("Dot");
  });

  it('toBeNaN -- checks not a number or undetermined value as output', function () { // or 'scscvv',() => {
    expect(0/0).toBeNaN();
    expect(0/5).not.toBeNaN();
  });
  
  it('toBePositiveInfinity , tobeNegativeInfinity -- checks positive or negative infinite values',() => {
    expect(-5/0).toBeNegativeInfinity();
  });

});
