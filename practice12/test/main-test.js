/**
 * Created by zh on 17-7-14.
 */

describe('practice',() =>{
    it('practice12,give name,age,id,new Student(),when Klass.assignLeader(student),should print', () => {
        let klass1 = new Klass(2);
        let klass2 = new Klass(3);
        let klasses = [];
        klasses.push(klass1,klass2);
        let student = new Student('Pack',22,1,klass2);
        let teacher = new Teacher('zh',24,2,klasses);
        console.log(teacher)
        klass2.assignLeader(student);
        let result = `I am zh. I know Pack has joined Class 3.`;

        spyOn(console,'log');
        klass2.appendMember(student);
        expect(console.log).toHaveBeenCalledWith(result);
    });
});